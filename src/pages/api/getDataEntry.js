// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Charts from '../../../models/Charts'


export default async function handler(req, res) {

    if (req.method == 'POST'){
        const { id } = req.body;

        let charts = await Charts.findById(id)
        if(charts){
            res.status(200).json({ success: true, charts}) 
        }
        else{
            res.status(400).json({ success: false, message: "Some error occurred!" }) 
        }
    }

    else{
        res.status(400).json({ success: false, message: "Some Error Occured !" }) 
    }

}
