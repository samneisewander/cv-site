import { Routes, Route } from 'react-router-dom'
import { Toast, Tooltip } from '@base-ui-components/react'
import { useEffect } from 'react'
import Home from './pages/Home'
import Emma from './pages/Emma'
import Blog from './pages/Blog'
import blogData from './data/blogData.json'
import BlogArticle from './components/BlogArticle'
import { type BlogData } from './types'
import { M3Theme, ThemeProvider } from 'm3-palettes'
import { BreakpointContextProvider } from './components/BreakpointContext'

export default function App() {

	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			// Remove the '#' from the hash to get the element ID
			const elementId = hash.substring(1);
			const targetElement = document.getElementById(elementId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []); // Empty dependency array ensures this runs once on mount

	const blogRoutes = blogData.map((blog: BlogData) => {
		return (
			<Route key={blog.id} path={'/blog/' + blog.shortTitle} element={<BlogArticle blogData={blog} />} />
		)
	})

	const initialTheme: M3Theme = {
		primary: '#ff0048',
		scheme: 'content',
		darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
		contrast: 0
	}

	return (
		<BreakpointContextProvider>
			<ThemeProvider initialTheme={initialTheme}>
				<Tooltip.Provider>
					<Toast.Provider>
						<div className={initialTheme.darkMode ? 'dark' : 'light'}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/emma" element={<Emma />} />
								<Route path="/blog" element={<Blog />} />
								{blogRoutes}
							</Routes>
						</div>
					</Toast.Provider>
				</Tooltip.Provider>
			</ThemeProvider>
		</BreakpointContextProvider>
	)
}  