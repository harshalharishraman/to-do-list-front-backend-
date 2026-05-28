const kcfg =require('../knexfile');
const kx=require('knex')(kcfg);
class core_fns{
    static async add_act(d){
        try {
            const [act]=await knex('me_todo').insert({activity:d.activity}).returning("*");
            return [act];}
             catch (error) {
            console.error(`error in adding activity:${error}`);
            throw error;}
        }
        static async get_all(d){
        try {
            const act=await knex('me_todo').select('*').orderby('id','desc');
            return act;}
             catch (error) {
            console.error(`error in getting activities:${error}`);
            throw error;}
        }
        static async gid_act(i){
        try {
            const act=await knex('me_todo').where({id:i}).first();
            return act;}
             catch (error) {
            console.error(`error in getting activity by that id:${error}`);
            throw error;}
        }
        static async delby_id(i){
        try {
            const act=await knex('me_todo').where({id:i}).del();
            return act;}
             catch (error) {
            console.error(`error in getting activity by that id:${error}`);
            throw error;}
        }
        static async uact_id(i,b){
        try {
            const act=await knex('me_todo').where({id:i}).update({activity:b.activity}).returning("*");
            return act;}
             catch (error) {
            console.error(`error in updating activity by that id:${error}`);
            throw error;}
        }
        static async dact_all(b){
        try {
            const act=await knex('me_todo').del();
            return act;}
             catch (error) {
            console.error(`error in deleting all activites:${error}`);
            throw error;}
        }
        
}