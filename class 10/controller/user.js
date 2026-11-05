import User from '../model/userModel.js'

const createUser = async (req, res)=>{
    try{
        const{name, age, gender, course} = req.body

        if(!name || !age || !gender || !course){
            return res.status(404).json({
                message:'data did not found...',
                success:false
            })
        }

        const use = await User.create({
            name, age, gender, course
        })

        res.status(201).json({
            message:'user has created successfully...',
            success:true,
            user
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:'failed to create user...',error
        })

    }
}

const readUser = async(req,res)=>{
    try{
        let user = await User.find({
            gender:{$eq:'male'}
        })

        if (!user){
            return res.status(404).json({
                message:"user not found",
                success:false
            })
        }
        res.status(200).json({
            message:"data found successfully...",
            success:true,
            user
        })

    }catch(error){
        res.status(500).json({
            message:"internal server error...",error

            
        })

    }
}

const updateUser = async(req, res)=>{
    try{
        const {id} = req.params

        if (!id){
            return res.status(404).json({
                message:"id not found"
            })
        }
        let {name,age,gender,course} = req.body
        let user

        if (name){
            user = await User.findByIdAndUpdate(id, {name})
        }

        if (age){
            user = await User.findByIdAndUpdate(id, {age})
        }

        if (gender){
            user = await User.findByIdAndUpdate(id, {gender})
        }

        if (course){
            user = await User.findByIdAndUpdate(id, {course})
        }

        res.status(200).json({
            success:true,
            message:"user updated successfully..",
            user
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:"internal server error...",error
        })
    }
}


export {createUser, readUser, updateUser}