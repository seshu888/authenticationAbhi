import classes from './StartingPageContent.module.css';
import { AiFillEye } from 'react-icons/ai';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Popup from '../popup/Popup';
import { Navigate, useNavigate ,Link} from 'react-router-dom';

const StartingPageContent = () => {
	const [ countryData, setCountryData ] = useState(null);
	const [ modal, setModal ] = useState(false);
	const authCtx = useContext(AuthContext);
	const [ itemClicked, setItemClicked ] = useState(null);
	const navigate=useNavigate()
	useEffect(() => {
		authCtx.getApi();

	}, []);

	const handleItem = (item) => {
		console.log("seshu")
		setItemClicked(item);
	};

	const handleClose=()=>{
		setItemClicked(null)
	}
	const handelAction=()=>{
		
	}
	console.log(countryData && countryData);
	return (
		<section className={classes.starting}>
			<h1 onClick={() => {console.log("seshu")}}>Welcome on Board!</h1>
		{itemClicked && <Popup onClose={handleClose}>
		
			<div>
				<h1>{itemClicked.cca3}</h1>
			</div>
		</Popup>}
			{authCtx.apiData && <table>
				<thead>
					<tr>
						<th>cca3</th>
						<th>Name</th>
						<th>Capital</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{authCtx.apiData  &&
						authCtx.apiData .map((item, index) => {
							return (
								<tr key={index} id={index}>
									<td   >{item.cca3}</td>
									<td onClick={() => handleItem(item)}>{item.name.common}</td>
									<td>{item.capital}</td>
									<td ><Link to="/details" state={item && item}>👁️</Link></td>
								</tr>
							);
						})}
				</tbody>
			</table>}
		</section>
	);
};

export default StartingPageContent;
