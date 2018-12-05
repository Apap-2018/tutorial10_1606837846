import React from 'react';
import { DaftarPasienRow } from '../components/DaftarPasienRow';
import { DaftarStafRow } from '../components/DaftarStafRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarStafFarmasi extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaf: []
		}

		Appointment.getAllStafFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaf: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf', 'Jenis']}>
                    <DaftarStafRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
	}
}