import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Conact = () => {
    return(
        <div className='contact'>
            <Header />
            <form>
                <div className='form-section'>
                    <h1 className='contact-header'>Contact Me</h1>
                    <div className="mb-3">
                        <label for='inputName' className='form-label'>Name:</label>
                        <input type="Name" className='form-control' id="inputName" aria-describedby='nameHelp'></input>
                    </div>
                    <div className='mb-3'>
                        <label for='inputEmail' className='form-label'>Email:</label>
                        <input type="email" className="form-control" id="inputEmail"/>
                    </div>
                </div>
            </form>
        </div>
    )
}