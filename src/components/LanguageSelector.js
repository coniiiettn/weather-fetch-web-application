import React from 'react';
import { Form } from 'react-bootstrap';

// Language options array
const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'ja', label: '日本語' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'th', label: 'Thai' },
  { value: 'it', label: 'Italian' },
  { value: 'es', label: 'Spanish' },
];

const LanguageSelector = ({ language, onLanguageChange }) => {
  return (
    <Form.Select
      aria-label="Language Selector"
      size="sm"
      value={language}
      onChange={(event) => onLanguageChange(event.target.value)}
    >
      {/* Map through the language options array to create the dropdown options */}
      {languageOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
};

export default LanguageSelector;
