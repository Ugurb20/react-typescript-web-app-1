import React from 'react';
import { useState } from 'react';
import './app.css';
import PageWrapper from '@components/common/page-wrapper';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<PageWrapper>
									<Suspense fallback={<div>Loading... //TODO SPINNER</div>}>
										<route.component />
									</Suspense>
								</PageWrapper>
							}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
