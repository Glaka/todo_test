import React from 'react';
import { FLAGS } from '../../helpers/constants';

export const Filter = () => {
    return (
        <div>
            {Object.keys(FLAGS).map((flag) => {
                return (
                    <button type="button" key={FLAGS[flag]} value={FLAGS[flag]}>
                        {FLAGS[flag]}
                    </button>
                );
            })}
        </div>
    );
};
