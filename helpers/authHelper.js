import bcrypt from"bcrypt"

export const hashePassword=async(password)=>{
    try {
        const saltRounds=10
        const hashedPassword=await bcrypt.hash(password,saltRounds)
        return hashedPassword
    } catch (error) {
        console.log("Error in hashePassword : ",error);
    }
}

export const comparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}