import mongoose from "mongoose"

const connectDB = async () => {
    try {

        await mongoose.connect(`mongodb://localhost:27017/portfolio`)
        console.log("mongodb conected ");

    } catch (error) {
        console.log("dmongo not connected")

    }


}

export default connectDB;