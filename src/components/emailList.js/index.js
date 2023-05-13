import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from '../section';
import InboxIcon from '@mui/icons-material/Inbox';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../emailRow';
import { emailListActionsLeft, emailListActionsRight } from '../../constants/icons';
import { db } from '../../firebase';

function EmailList() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection('emails')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data()
					}))
				)
			);
	}, []);

	return (
		<div className='emailList'>
			<div className='emailList__settings'>
				<div className='emailList_settings__left'>
					{emailListActionsLeft.map((icon, idx) => (
						<IconButton key={idx}>
							<icon.icon />
						</IconButton>
					))}
				</div>

				<div className='emailList_settings__right'>
					{emailListActionsRight.map((icon, idx) => (
						<IconButton key={idx}>
							<icon.icon />
						</IconButton>
					))}
				</div>
			</div>

			<div className='emailList__sections'>
				<Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
				<Section Icon={GroupIcon} title='Social' color='blue' />
				<Section Icon={LocalOfferIcon} title='Promotions' color='green' />
			</div>

			<div className='emailList__list'>
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => (
					<EmailRow
						key={id}
						id={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timestamp?.seconds * 1000).toUTCString()}
					/>
				))}
			</div>
		</div>
	);
}

export default EmailList;
