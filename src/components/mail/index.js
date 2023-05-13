import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { mailActionsLeft, mailActionsRight } from '../../constants/icons';
import './Mail.css';
import { selectOpenMail } from '../../features/mailSlice';
import { useSelector } from 'react-redux';

function Mail() {
	const navigate = useNavigate();
	const selectedMail = useSelector(selectOpenMail);

	console.log('selectedMail', selectedMail);

	return (
		<div className='mail'>
			<div className='mail__tools'>
				<div className='mail__toolsleft'>
					{mailActionsLeft.map((icon, idx) => (
						<IconButton
							key={idx}
							onClick={icon.action === 'navigateToEmails' ? () => navigate('/') : null}
						>
							<icon.icon />
						</IconButton>
					))}
				</div>

				<div className='mail__toolsRight'>
					{mailActionsRight.map((icon, idx) => (
						<IconButton key={idx}>
							<icon.icon />
						</IconButton>
					))}
				</div>
			</div>

			<div className='mail__body'>
				<div className='mail__bodyHeader'>
					<h2>{selectedMail?.subject}</h2>
					<LabelImportantIcon className='mail__bodyImportant' />
					<p>{selectedMail?.title}</p>
					<p className='mail__bodyTime'>{selectedMail?.time}</p>
				</div>
				<div className='mail__bodyMessage'>
					<p>{selectedMail?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Mail;
