import mongoose, {Schema} from "mmongoose"
import mongooseAggregatePaginate from
 "npm i mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, 
            required : true
        },
        thumbnail:{
            type: String, 
            required : true
        },
        title:{
            type: String, 
            required : true
        },
        description:{
            type: String, 
            required : true
        },
        duration:{
            type: Number, 
            required : true
        },
        view: {
            type:Number,
            defoult: 0
        },
        isPublished:{
            type: Boolean,
            defoult: true
        },
        owner:{
            type: Schema.type.ObjectId,
            ref: "User"
        }
    },
    {
       timestamps: true 
    }
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video",videoSchema)