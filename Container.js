
import React, { Fragment } from 'react'
import Header from './Header'
import Section from './Section'
import List from './List'
import Application from './Application'

const Container = () => (
    <Fragment>
        <header />
        <main>
            <section headingText="Add a new favourite" />
            <section headingText="Records" />
            <List />
            <Section />
        </main>;
    </Fragment>
)
export default Container;