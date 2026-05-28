require("dotenv").config();
const m=require('../model/model_fns');
const r=require('../vo/resVO');
class control_panel{
    static async add(req,res){
        try{
            const t=await m.add_act(req.body);
            res.status(201).json(new r('added activity',201,t))//send response in a std format
        }
        catch(error){
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
     static async get_all(req,res){
        try {
            const t = await m.gid_act(req.body);
            if (!t) {
        return res.status(404).json(new r("no activites found", 404, null));}
            res.status(200).json(new r(`all activities found `,200,t))//send response in a std format
            
        } catch (error) {
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
    static async getby_id(req,res){
        try {
            const t = await m.gid_act(req.params.id);
            if (!t) {
        return res.status(404).json(new r("activity not found", 404, null));}
            res.status(200).json(new r(`found activity with id:${req.params.id}`,200,t))//send response in a std format
            
        } catch (error) {
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
    static async delby_id(req,res){
        try {
            const t = await m.dact_id(req.params.id);
            if (!t) {
        return res.status(404).json(new r("activity not found", 404, null));}
            res.status(200).json(new r(`deleted activity with id:${req.params.id}`,200,t))//send response in a std format
            
        } catch (error) {
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
        static async udtby_id(req,res){
        try {
            const t = await m.uact_id(req.params.id,req.body);
            if (!t) {
        return res.status(404).json(new r("activity not found", 404, null));}
            res.status(200).json(new r(`found updated activity with id:${req.params.id}`,200,t))//send response in a std format
            
        } catch (error) {
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
        static async del_all(req,res){
        try {
            const t = await m.dact_all();
            if (!t) {
        return res.status(404).json(new r("no activity found", 404, null));}
            res.status(200).json(new r('deleted all activites',200,t))//send response in a std format
            
        } catch (error) {
            res.status(500).json(new r('internal server issue',500,null));
        }
    }
}
module.exports=control_panel;
