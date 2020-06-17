import React from 'react';

export const MergedConstContext = React.createContext({});
export const LoggedInContext = React.createContext(false);
export const LoggedInUserContext = React.createContext({});

export let MergedLetContext = React.createContext({});
export let FilterContext = React.createContext('');
export let ActionContext = React.createContext('');

