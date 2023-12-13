import { HeroList } from '../components';

const publisher = 'DC Comics';

const DcPage = () => {
	return (
		<>
			<h1>DC Comics</h1>
			<hr />

			<HeroList publisher={publisher}/>
		</>
	);
};

export default DcPage;
