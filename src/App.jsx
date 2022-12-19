import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='bg-slate-50'>
			<Header />
			<div className='w-4/5 mx-auto'>
				<Courses />
			</div>
		</div>
	);
}
export default App;
