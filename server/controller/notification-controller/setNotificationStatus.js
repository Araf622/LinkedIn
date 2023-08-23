let Notification = require('../../models/notification.model')

const setNotificationStatus = async(req, res) => {
    const notification = req.body
    const postId = notification.postId
    const receiverId = notification.receiverId
    // console.log("notification : ", notification)
    try{
        // await Notification.updateMany(
        //     {$and: [{postId:postId},{receiverId:receiverId}]},
        //     {seen:true},
        // )
        await Notification.deleteMany({ $and: [{ postId: postId }, { receiverId: receiverId }] });

        res.status(200).json({ message: 'Notification status updated successfully' });
    }
    catch(err){
        console.log("Error updating notification : ", err)
    }

}

module.exports = setNotificationStatus