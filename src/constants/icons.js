import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import MoveToInboxIcon from '@mui/icons-material/MoveToInboxOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const emailListActionsLeft = [
	{ icon: CheckBoxOutlineBlankIcon },
	{ icon: ArrowDropDownIcon },
	{ icon: RedoIcon },
	{ icon: MoreVertIcon }
];

export const emailListActionsRight = [
	{ icon: ChevronLeftIcon },
	{ icon: ChevronRightIcon },
	{ icon: KeyboardHideIcon },
	{ icon: SettingsIcon }
];

export const mailActionsLeft = [
	{ icon: ArrowBackIosOutlinedIcon, action: 'navigateToEmails' },
	{ icon: MoveToInboxIcon },
	{ icon: ErrorIcon },
	{ icon: DeleteIcon },
	{ icon: EmailIcon },
	{ icon: WatchLaterIcon },
	{ icon: CheckCircleIcon },
	{ icon: LabelImportantIcon },
	{ icon: MoreVertIcon }
];

export const mailActionsRight = [
	{ icon: UnfoldMoreIcon },
	{ icon: PrintIcon },
	{ icon: ExitToAppIcon }
];
