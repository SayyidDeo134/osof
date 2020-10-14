import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text, Card, Icon, Avatar } from '@ui-kitten/components';

const HomeScreen = () => {
    return (
        <Layout style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }} >
            <Layout style={{ paddingVertical: 15, paddingHorizontal: 10, backgroundColor: '#EEEEEE', borderRadius: 40, alignItems: 'flex-end' }} >
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ marginRight: 15, alignItems: 'flex-end' }} >
                        <Text style={{ fontSize: 18 }} >Nama Siswa</Text>
                        <Text>Kelas</Text>
                    </View>
                    <Avatar
                        source={{ uri: 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' }}
                        size='large'
                    />
                </View>
            </Layout>
            <Layout style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', paddingVertical: 10 }}>
                <Card style={{ width: 180, height: 180, borderRadius: 40, backgroundColor: '#BA68C8' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon style={{ width: 50, height: 50 }} fill="white" name="book-open" />
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white' }} > Jadwal </Text>
                        <Text style={{ marginLeft: 8, color: 'white' }} >Mata pelajaran dan absensi</Text>
                    </View>
                </Card>
                <Card style={{ width: 180, height: 180, borderRadius: 40, backgroundColor: '#FFAB91' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon style={{ width: 50, height: 50 }} fill="white" name="message-circle" />
                    </View>
                    <View style={{ marginTop: 25 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white' }} > Chat </Text>
                        <Text style={{ marginLeft: 8, color: 'white' }} >Chatting dengan warga sekolah</Text>
                    </View>
                </Card>
            </Layout>
            <Layout>
                <Text style={{ marginVertical: 15, fontWeight: 'bold', fontSize: 17 }} >Informasi</Text>
                <View style={{
                    backgroundColor: 'orange',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    borderRadius: 15
                }} >
                    <Avatar
                        source={{ uri: 'https://img2.pngdownload.id/20180323/xhw/kisspng-newspaper-thepix-news-media-computer-icons-taxi-5ab54f929be4d9.9690984015218318266386.jpg' }}
                        size='giant'
                    />
                    <View style={{ marginLeft: 15 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#FAFAFA' }} >Rapat wali murid kelas XI</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#F5F5F5' }} >13, Oktober 2020</Text>
                    </View>
                </View>
            </Layout>
        </Layout>
    );
}

export default HomeScreen;