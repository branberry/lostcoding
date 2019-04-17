import React from 'react'
import styles from './Index.module.scss'
  
interface IndexPageProps {}
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div className={styles.Container}>
        <h1>Hello world!</h1>
        <p>CSS preprocessors are pretty great. They sure are.</p>
      </div>
    )
  }
}