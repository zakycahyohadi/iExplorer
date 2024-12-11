import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:aspen_apk/screens/splash/splash_screen.dart';

void main() => runApp(DevicePreview(
      enabled: true, // Aktifkan Device Preview
      builder: (context) => const MyApp(), // Aplikasi utama
    ));

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Travel App',
      home: const SplashScreen(),
      // Tambahkan builder Device Preview
      builder: DevicePreview.appBuilder,
      // Sesuaikan dengan locale perangkat
      locale: DevicePreview.locale(context),
    );
  }
}
