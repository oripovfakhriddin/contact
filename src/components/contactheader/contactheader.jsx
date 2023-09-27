import React, { Component, Fragment } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap';

export class ContactHeader extends Component {
  render() {
    const {searchRef, searchContacts, filterCategories, categories, filterLiked, likefav, sortAlphabet, sortingAlphabet} = this.props
    return (
      <Fragment>
        <section>
          <Container>
          <InputGroup className="my-3">
            <Form.Control
              onChange={searchContacts}
              ref={searchRef}
              placeholder="Searching contact..."
            />
            <InputGroup.Text>
              <Form.Select onChange={filterLiked} value={likefav} >
                <option value="like">Like</option>
                <option value="favourite">Favourite</option>
                <option value="unfavourite">Un Favourite</option>
              </Form.Select>
            </InputGroup.Text>
            <InputGroup.Text>
              <Form.Select onChange={sortingAlphabet} value={sortAlphabet} >
              <option value="default">Default</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </Form.Select>
            </InputGroup.Text>
            <InputGroup.Text>
              <Form.Select onChange={ filterCategories } value={categories} >
              <option value="all">All</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="relatives">Relatives</option>
                <option value="other">Other</option>
              </Form.Select>
            </InputGroup.Text>
          </InputGroup>
          </Container>
        </section>
      </Fragment>
    )
  }
}

export default ContactHeader;