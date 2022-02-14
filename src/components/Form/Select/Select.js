import { Button } from 'components/Form';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { v1 } from 'uuid';
import { StyledMenuItem, StyledSelectMenuList, StyledSelectWrapper } from './styles';

export function Select({ placeholder = 'Empty select text', name = '', value = '', children, onChange = () => {} }) {
  const [selectedValue, setSelectedValue] = useState(value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuId = v1();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSelectBlur = (e) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleOptionClicked = (e) => {
    const value = e.target.getAttribute('data-value');
    const selectedItem = menuRef.current.querySelector('[aria-selected=true]');
    selectedItem?.setAttribute('aria-selected', 'false');
    e.target.setAttribute('aria-selected', 'true');
    setSelectedValue(value);
    onChange({
      target: {
        name,
        value,
      },
    });
    setIsMenuOpen(false);
  };

  const setActiveOption = () => {
    const options = menuRef.current.querySelectorAll('[role=option]');
    options.forEach((option) => {
      option.setAttribute('aria-selected', 'false');
      if (value !== '' && option.getAttribute('data-value').toLowerCase() === value.toLowerCase()) {
        option.setAttribute('aria-selected', 'true');
      }
    });
    setSelectedValue(value);
  };

  useEffect(() => {
    const options = menuRef.current.querySelectorAll('[role=option]');
    options.forEach((option) => {
      option.addEventListener('click', handleOptionClicked);
    });

    return () => options.forEach((option) => option.removeEventListener('click', handleOptionClicked));
  }, []);

  useEffect(setActiveOption, [value]);

  return (
    <StyledSelectWrapper isMenuOpen={isMenuOpen} onBlur={handleSelectBlur}>
      <Button aria-haspopup="listbox" aria-expanded={isMenuOpen} onClick={toggleMenu} aria-controls={menuId}>
        <span>{selectedValue === '' ? placeholder : selectedValue}</span>
        <ChevronDown size={14} />
      </Button>
      <StyledSelectMenuList
        id={menuId}
        ref={menuRef}
        tabIndex={isMenuOpen ? 1 : -1}
        role="listbox"
        isVisible={isMenuOpen}
      >
        {children}
      </StyledSelectMenuList>
    </StyledSelectWrapper>
  );
}

Select.Option = ({ children, value }) => (
  <StyledMenuItem role="option" aria-selected="false" data-value={value}>
    {children}
  </StyledMenuItem>
);
