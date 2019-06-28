import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd';
import {newPost} from '../../../services/auth';
const { TextArea } = Input;

export default class ProjectModal extends Component {

    constructor(){
        super();
        this.state =  {
            data: {}
        }
    }

    handleChange = (e) => {
        const {data} = this.state;
        let field = e.target.name;
        data[field] = e.target.value;
        this.setState({data});
        
    };

    submit=(e)=>{
        e.preventDefault();
        let {data}=this.state;
        const {user}=this.props;
        data['owner']=user._id;
        newPost(data).then(res=>{
            console.log('adasdasda',res)
            let post = res.post
            this.props.setNewPost(post)
            //this.props.readPost(res.data)
            this.props.close()
        })
            .catch(err=>{
            console.log(err);
            });
    };

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (

            <Modal
                title="Post Nuevo"
                centered
                visible={this.props.open}
                onCancel={()=>this.props.close()}
                footer={null}
            >
                <Form onSubmit={this.submit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Nombre del Post"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"nombre"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Contenido"
                    >
                        <TextArea rows={4}
                            onChange={this.handleChange}
                            name={"post"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="URL de tu Post"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"imagen"}
                            required
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Create</Button>
                    </Form.Item>
                </Form>
            </Modal>


        )
    }
}

