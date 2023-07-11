import React from 'react';

export interface AdminPageDumbProps {
	storeName?: string;
}

const AdminPageDumb: React.FC<AdminPageDumbProps> = () => {
	return (
		<div>
			<h1>Admin Page</h1>
		</div>
	);
};

export default AdminPageDumb;
