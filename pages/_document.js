import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {

	render() {

		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						

						// href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz|Raleway" rel="stylesheet"

						href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"
						
					/>
					<link rel="stylesheet" href="/video-react.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script type="text/javascript">
					
					</script>
				</body>
			</Html>
		);
	}
}
