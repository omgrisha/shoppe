import {
  StyledSelect,
  StyledOption,
  StyledOptions,
  StyledSelectWrapper,
} from './Select.styled';

import { useState, useEffect } from 'react';

export const Select = ({ options, title = '…', initialIndex, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(() => {
    if (
      initialIndex !== null &&
      initialIndex !== undefined &&
      initialIndex >= 0
    ) {
      const option = options[initialIndex];
      if (option) return options[initialIndex].title;
    }
  });
  const [selectedOption, setSelectedOption] = useState(initialIndex);

  useEffect(() => {
    const onClick = (e) => {
      if (!e.target.closest('[data-select]')) {
        setOpen(false);
      }
    };

    const onEscDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onEscDown);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('onkeydown', onEscDown);
    };
  }, []);

  const handleOptionClick = (optionIndex) => {
    const option = options[optionIndex];

    if (option.disabled) {
      return;
    }
    setSelectValue(option.title);
    setSelectedOption(optionIndex);

    onChange(option.name);
    setOpen(false);
  };

  const handleClick = (e) => {
    setOpen(!open);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      setOpen(!open);
    }

    // if pressed arrow buttom
    if (e.keyCode === 40) {
      let index = options.findIndex((option) => option.title === selectValue);
      if (index === options.length - 1) {
        // because next incrementing
        index = -1;
      }
      do {
        index++;

        if (index === options.length) {
          index = -1;
        }

        if (!options[index]?.disabled && index !== -1) break;
      } while (index <= options.length - 1);

      console.log('INDEX', index);

      setSelectValue(options[index].title);
      setSelectedOption(index);
      onChange(options[index].name);
    }

    // if pressed arrow up
    if (e.keyCode === 38) {
      let index = options.findIndex((option) => option.title === selectValue);
      if (index === 0) {
        // because next decrementing
        index = options.length;
      }

      do {
        index--;
        if (index === -1) {
          index = options.length;
        }

        if (!options[index]?.disabled && index !== options.length) break;
      } while (index >= 0);

      setSelectValue(options[index].title);
      setSelectedOption(index);
      onChange(options[index].name);
    }
  };

  return (
    <StyledSelect
      onClick={handleClick}
      onKeyDown={handleKey}
      tabIndex="0"
      data-select
    >
      <StyledSelectWrapper>
        <div>
          {selectValue ? (
            selectValue
          ) : (
            <span style={{ color: '#838383' }}>{title}</span>
          )}
        </div>

        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path
            d="M12.6551 0.103514C12.7208 0.0372643 12.8103 -5.20037e-08 12.9036 -4.7925e-08C12.9969 -4.38464e-08 13.0864 0.0372643 13.1521 0.103514L13.894 0.845401C13.9616 0.908905 14 0.997568 14 1.09036C14 1.18316 13.9616 1.27182 13.894 1.33533L7.46193 7.76735C7.36358 7.86582 7.23016 7.9212 7.09099 7.92133L6.90901 7.92133C6.76984 7.9212 6.63642 7.86582 6.53807 7.76735L0.106047 1.33533C0.0383834 1.27182 9.01957e-07 1.18316 9.06013e-07 1.09036C9.10069e-07 0.997567 0.0383834 0.908904 0.106047 0.8454L0.847934 0.103513C0.913642 0.0372638 1.00309 -5.68113e-07 1.0964 -5.64034e-07C1.18971 -5.59956e-07 1.27915 0.0372638 1.34486 0.103513L7 5.75865L12.6551 0.103514Z"
            fill="black"
          />
        </svg>
      </StyledSelectWrapper>

      <StyledOptions $isOpen={open}>
        <StyledOption disabled>{title}</StyledOption>

        {options.map((option, index) => (
          <StyledOption
            key={option.name}
            disabled={option.disabled}
            tabIndex="-1"
            $selected={index === selectedOption}
            onClick={(e) => {
              e.stopPropagation();
              handleOptionClick(index);
            }}
          >
            {option.title}
          </StyledOption>
        ))}
      </StyledOptions>
    </StyledSelect>
  );
};
