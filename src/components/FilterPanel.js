import React from 'react';

export default function FilterPanel({ onFilterChange }) {
    return (
        <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            backgroundColor: 'rgba(0, 0, 30, 0.7)',
            padding: '10px',
            borderRadius: '8px',
            color: 'white',
            border: '1px solid #333'
        }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Link Filters</h4>
            <label>
                <input type="checkbox" defaultChecked onChange={(e) => onFilterChange('critical', e.target.checked)} />
                Critical (>85%)
            </label><br/>
            <label>
                <input type="checkbox" defaultChecked onChange={(e) => onFilterChange('warning', e.target.checked)} />
                Warning (>50%)
            </label>
        </div>
    );
}
