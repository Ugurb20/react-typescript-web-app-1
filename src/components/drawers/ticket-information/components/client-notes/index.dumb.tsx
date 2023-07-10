import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField } from '@mui/material';
import style from './index.module.scss';
import { TabPanel } from '@components/calendar/appointment-list/components/tab-panel';

export interface ClientNotesProps {
  clientNotes: string;
  appointmentNotes: string;
}

export const ClientNotes: React.FC<ClientNotesProps> = ({
  clientNotes = '',
  appointmentNotes = '',
}) => {
  const [selectedTab, setValue] = useState(0);
  const [editableText, setEditableText] = useState(appointmentNotes);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditableText(event.target.value);
  };

  return (
    <div className={style.noteTabs}>
      <Tabs value={selectedTab} onChange={handleChange} variant={'fullWidth'}>
        <Tab label="Client Notes" />
        <Tab label="Appointment Notes" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <Box sx={{ p: 1 }}>{clientNotes}</Box>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <TextField
          sx={{ p: 1, border: 'none', outline: 'none' }}
          value={editableText}
          onChange={handleTextChange}
          multiline
          fullWidth
          placeholder={'Add notes here...'}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </TabPanel>
    </div>
  );
};
