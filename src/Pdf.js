import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class Pdf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      numPages: null
    }
  }

  handleFileChange = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      this.setState({
        file: files[0]
      })
    }
  }

  handleDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages
    })
  }

  render() {
    const { numPages, file } = this.state

    return (
      <div>
        <div>
          <input type='file' onChange={ this.handleFileChange }/>
        </div>
        <div>总页码： { numPages }</div>
        <div className={ 'pdf-document' }>
          <Document file={ file }
                    onLoadSuccess={ this.handleDocumentLoadSuccess }
                    options={ options }
          >
            {
              Array.from(new Array(numPages), (value, index) => (
                <>
                  <Page key={ `page_${ index + 1 }` } pageNumber={ index + 1 } className={ 'pdf-page' }/>
                  <div className={'pdf-page-number'}>第{ index + 1 }页</div>
                </>
              ))
            }
          </Document>
        </div>
      </div>
    )
  }
}
