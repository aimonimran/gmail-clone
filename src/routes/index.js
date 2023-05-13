import { APP_ROUTES } from '../helpers/routeHelpers';
import Mail from './../components/mail/index';
import withTitle from './../hoc/index';
import EmailList from './../components/emailList.js/index';
import { ROUTE_TITLES } from '../constants/routeTitles';

export const routes = [
	{
		path: APP_ROUTES.MAIL,
		component: withTitle(Mail, ROUTE_TITLES.MAIL),
		exact: true
	},
	{
		path: APP_ROUTES.EMAIL_LIST,
		component: withTitle(EmailList),
		exact: true
	}
];
