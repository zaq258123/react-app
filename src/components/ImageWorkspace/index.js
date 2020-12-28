import React, { Component } from 'react'
import './style.css'
import { Form } from 'react-bootstrap'

class ImageWorkspace extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.loadImageToDataUrl = this.loadImageToDataUrl.bind(this)
    this.state = { files: [] }
  }
  async handleChange(event) {
    let fileList = event.target.files
    let fileArr = []
    for (let i = 0; i < fileList.length; i++) {
      let { width, height, dataUrl } = await this.loadImageToDataUrl(fileList[i])
      let { name, type } = fileList[i]
      fileArr.push({ name, type, url: dataUrl, width, height })
    }
    this.setState((state) => ({ files: [...this.state.files, ...fileArr] }))
  }
  loadImageToDataUrl(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        let image = new Image()
        let canvas = document.createElement('canvas')
        image.src = reader.result
        image.onload = () => {
          let ctx = canvas.getContext('2d')
          let { width: w, height: h } = image
          let ratio = w > h ? 1.3 : 0.74
          canvas.width = w > h ? 1600 : 1200
          canvas.height = w > h ? 1200 : 1600
          if (w / h > ratio) {
            ctx.drawImage(image, w / 2 - (ratio * h) / 2, 0, ratio * h, h, 0, 0, canvas.width, canvas.height)
          } else {
            ctx.drawImage(image, 0, h / 2 - (ratio * w) / 2, w, ratio * w, 0, 0, canvas.width, canvas.height)
          }
          resolve({ dataUrl: canvas.toDataURL(file.type), height: canvas.height, width: canvas.width })
        }
      }
      reader.onerror = (error) => reject(error)
    })
  }
  render() {
    let { files } = this.state
    let preview = null
    if (files.length !== 0) {
      preview = (
        <div>
          {files.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.name} style={{ maxWidth: '200px' }} />
              <p style={{ color: '#fff' }}>
                Width: {image.width} / Height: {image.height}
              </p>
            </div>
          ))}
        </div>
      )
    }
    return (
      <div>
        <Form>
          <Form.File label="upload" accept="image/*" data-browse="+" multiple custom onChange={this.handleChange} />
        </Form>
        <div>{preview}</div>
      </div>
    )
  }
}

export default ImageWorkspace
