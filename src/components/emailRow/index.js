import React from 'react';
import './EmailRow.css';
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(
			selectMail({
				id,
				title,
				subject,
				description,
				time
			})
		);
		navigate('/mail');
	};

	return (
		<div onClick={openMail} className='emailRow'>
			<div className='emailRow__options'>
				<IconButton>
					<CheckBoxOutlineBlankOutlinedIcon />
				</IconButton>
				<IconButton>
					<StarBorderPurple500OutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>

			<h3 className='emailRow__title'>{title}</h3>

			<div className='emailRow__message'>
				<h4>
					{subject} - <span className='emailRow__description'>{description}</span>
				</h4>
			</div>

			<p className='emailRow__time'>{time}</p>
		</div>
	);
}

export default EmailRow;
