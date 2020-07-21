const models = require('../../database/models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../database/models');
const addUser = async (req,res)=>{
    try {
        const {
            uname,
            upwd,
            urole,
        } = req.body;
        const addedUser = await models.users.create({
            uname,upwd,urole
        });
        const {id} = addedUser;
        const uid = parseInt(id);
        const updatedUid = await models.users.update({uid,uname,upwd,urole},{
            where:{
                id:uid
            }
        });
        const Udata = await models.users.findOne({
            where:{
                id:uid
            }
        })
        return res.status(200).json({
            createdUserId:{
                userid:Udata['uid'],
                username:Udata['uname']
            }           
        });
    } catch (error) {
        return res.status(501).json({
            error: error.message
        });
        
    }
};
const updateUser = async (req,res)=>{

    try {
        const {uid,uname,upwd,urole} = req.body;
        const updatedUser = await models.users.update({uname,urole,upwd},{
            where:{
                uid:uid
            }
        })
        const Udata = await models.users.findOne({
            where:{
                id:uid
            }
        })
        return res.status(200).json({
            updatedUserId:{
                userid:Udata['uid'],
                username:Udata['uname'],
                userrole:Udata['urole']
            }           
        });
    } catch (error) {

        return res.status(501).json({
            error: error.message
        });
        
    }

};
const deleteUser = async (req,res)=>{
    try {
        const {uid} = req.body;
        const deletedUser = await models.users.destroy({
            where:{
                id:uid
            }
        });
        if(deletedUser){
            return res.status(200).json({
                DeletedUserId:uid
            });
        }
        throw new Error("user id Not Found");
    } catch (error) {

        return res.status(501).json({
            error: error.message
        });
        


        
    }
}
const getAllUsers = async (req,res)=>{
    try {

        const allUsers = await models.users.findAll();

        return res.status(200).json({
            allUsers
        })
    } catch (error) {

        return res.status(501).json({
            error: error.message
        });
        
    }
}
const getAllroles = async (req,res)=>{
    try {

        const usersRoles = await sequelize.query("SELECT uid,urole FROM users", { type: QueryTypes.SELECT });
        return res.status(200).json({
            
            usersRoles
        })
        
    } catch (error) {

        return res.status(501).json({
            error: error.message
        });
        
    }
}
module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getAllroles
}