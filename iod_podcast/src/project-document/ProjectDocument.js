import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { withPdfProvider } from '../context/PdfProvider'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
    },
    logo: {
        height: '40px',
        width: '250px'
    },
    title: {
        fontSize: 24,
        paddingTop: 8, 
        paddingRight: 10, 
        paddingLeft: 15,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    sectionHeader: {
        borderBottomWidth: 3,
        borderColor: '#346094',
        letterSpacing: 1,
        paddingLeft: 20,
        fontSize: 20,
    },
    sectionText: {
        letterSpacing: 1,
        padding: 10,
        fontSize: 14,
        fontWeight: 400,
    }

});

const ProjectDocument = (props) => (
    
    <Document style={styles.document}>
        
        <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/io_horiz_rgb.png')} />
            <Text style={styles.title}> {props.title} </Text>
        </View>
        

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Purpose: </Text>
            <Text style={styles.sectionText}> {props.purpose}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Work to Accomplish:  </Text>
            <Text style={styles.sectionText}> {props.workToAccomplish}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Deliverables:  </Text>
            <Text style={styles.sectionText}> {props.deliverables}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Timeline:  </Text>
            <Text style={styles.sectionText}> {props.timeline}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Team:  </Text>
            <Text style={styles.sectionText}> {props.team}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Resources:  </Text>
            <Text style={styles.sectionText}> {props.resources}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Approvals:  </Text>
            <Text style={styles.sectionText}> {props.approvals}</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionHeader}> Communications:  </Text>
            <Text style={styles.sectionText}> {props.communications}</Text>
        </View>

        
        

        </Page>
    </Document>
);

export default withPdfProvider(ProjectDocument)