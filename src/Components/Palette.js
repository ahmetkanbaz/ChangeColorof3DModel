import React from 'react';
import { HexColorPicker } from 'react-colorful';

const Palette = ({state}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '40px',
      left: '40px'
      }}>
      <HexColorPicker 
        color={state.items[state.current]}
        onChange={color => state.items[state.current] = color}
        />
    </div>
  )
}

export default Palette;