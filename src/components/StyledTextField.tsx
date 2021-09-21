import { makeStyles } from '@material-ui/core/styles';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    '&': {
        marginLeft: '-2px',
        marginTop: '10px',
    },
    '& .MuiFormLabel-root': {
        color: '#fff',
        fontSize: '1rem',
        transform: 'translate(0, -10px) scale(1)',
        fontWeight: '400',
        lineHeight: '1.5'
    },
    '& .MuiInputBase-root': {
        backgroundColor: '#fff',
        paddingLeft: '6px',
        paddingRight: '6px',
        borderRadius: '4px',
        boxsizing: 'border-box',
        overflow: 'hidden',
    },
    '& .MuiInputBase-input': {
        height: '1.3em'
    }
  },
});

export function StyledTextField(props: TextFieldProps) {
  const classes = useStyles();

  return (
    <TextField
        className={classes.root}
        fullWidth
        margin="dense"
        {...props}
    />
  );
}

