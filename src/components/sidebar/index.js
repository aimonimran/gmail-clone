import { Button, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css';
import SidebarOption from '../sidebarOption';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { sidebarOptions } from '../../constants/sidebarOptions';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar() {
	const dispatch = useDispatch();

	return (
		<div className='sidebar'>
			<Button
				className='sidebar__compose'
				startIcon={<AddIcon fontSize='large' />}
				onClick={() => dispatch(openSendMessage())}
			>
				Compose
			</Button>

			{sidebarOptions.map((option, idx) => (
				<SidebarOption
					key={idx}
					Icon={option.Icon}
					title={option.title}
					number={option.number}
					selected={option.selected}
				/>
			))}

			<div className='sidebar__footer'>
				<div className='sidebar__footerIcons'>
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
