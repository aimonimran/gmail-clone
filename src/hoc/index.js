const withTitle = (Component, title) => (props) => {
	document.title = !title ? 'Gmail' : `${title} - Gmail`;
	return <Component {...props} />;
};

export default withTitle;
