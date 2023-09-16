// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::File;

#[tauri::command]
fn handle_js_quit() {
  println!("Salida desde TSX");
  // AppHandle::exit()
}

#[tauri::command]
fn get_user_info() -> String {
  "Hola".into()
}

#[tauri::command]
fn write_user_info() {

}

// fn handle_save_file(save_slot, data_type, data) {

// }

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![handle_js_quit, get_user_info])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
