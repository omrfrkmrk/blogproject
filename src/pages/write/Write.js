
import AddIcon from '@material-ui/icons/Add';
import "./write.css"
import write from "../../assets/write.jpg";

export default function Write() {
    return (
        <div className="write">
            <img 
                className='writeImg'
                src={write}
                alt=''
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <AddIcon className='writeIcon'></AddIcon>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className='writeInput' autoFocus={true}/>
                </div>

                <div className='writeFormGroup'>
                    <textarea p
                        placeholder='Tell your story' 
                        type="text" 
                        className='writeInput writeText'>
                    </textarea>
                </div>
                <button className='writeSubmit'> Publish </button>
            </form>
        </div>
    )
}
