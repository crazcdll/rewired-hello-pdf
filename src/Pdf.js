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
      file: 'https://1v1-fe-project-qiniu.xueba100.com//test/sample.pdf',
      // file: 'https://1v1-fe-project-qiniu.xueba100.com//test/%E6%96%B0%E4%B8%96%E7%BA%AA%E9%AB%98%E4%B8%80%E4%B8%8B.pdf',
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
              Array.from([1], (value, index) => (
                <>
                  <Page key={ `page_${ index + 1 }` }
                        pageNumber={ index + 1 }
                        className={ 'pdf-page' }
                        scale={0.8}
                        rotate={180}
                  />
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
