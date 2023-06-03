import { useState } from 'react';

import { ArticleList, ButtonList } from '../Componentes';
import data from '../data/data';
//Inicio con articulos recientes

function DetalleArticulo() {
	const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<section className='title'>
				<h1>
					Hamburguesas <span>Blog</span> 
				</h1>

			</section>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default DetalleArticulo;