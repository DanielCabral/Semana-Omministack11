const connection=require('../database/connection');
const crypto=require('crypto');

module.exports={
    async index (request,response) {
        const {page=1}=request.query;

        const [count]=await connection('incidents').count();

        const ongs=await connection('incidents')
        .join("ongs", "ongs.id", "=", "incidents.ong_id")
        .limit(5)
        .offset((page-1)*5)
        .select(['incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);

        response.header('X-Total-count',count['count(*)']); 
        return response.json(ongs);
    },
    async create(request,response){
        const {title,description, value}=request.body;
            const ong_id=request.headers.authorization;
            console.log(ong_id);
            const [id]= await connection('incidents').insert({
                title,
                description,
                value,
                ong_id
            });
            return response.send({id});
    },
    async teste(request,response){
        console.log(request.paramns)
        return response.status(404).send("Error");
    },
    async delete(request,response){
        console.log(request.params)
        const {id} =request.params;
        const ong_id=request.headers.authorization;
        const incident=await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();
        if(incident.ong_id != ong_id){
            return response.status(401).json({
                error:'Operation not permited'
            });
        }
        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }
};