import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className="about-heading" style={{ paddingBottom: '20px' }}>
				I Code
			</h1>
			<GitHubCalendar
				username="kevin46dsa"
				
			/>
		</Row>
	);
}

export default Github;