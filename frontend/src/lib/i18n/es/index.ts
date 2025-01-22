import en from '../en';
import type { Translation } from '../i18n-types';

const es = {
	...(en as unknown as Translation),
	home: {
		page_title: 'Inicio',
		order_groups: 'Grupos',
		order_name: 'Nombre',
		order_ip: 'IP',
		order_tooltip: 'Orden',
		no_devices: 'Sin dispositivos.',
		add_first_device: 'Añade tu primer dispositivo',
		grant_permissions:
			'Pídale al administrador que le otorgue permisos para los dispositivos existentes o que cree otros nuevos..'
	},
	account: {
		page_title: 'Cuenta',
		account_type_admin: 'Admin',
		account_type_user: 'Usuario',
		avatar_title: 'Avatar',
		language_title: 'Idioma',
		language_option_auto: 'Automático',
		change_password_title: 'Cambiar contraseña',
		change_password_body: 'Después de cambiar la contraseña, deberá iniciar sesión nuevamente.',
		change_password_label: 'Antigua contraseña',
		change_password_new: 'Nueva contraseña',
		change_password_confirm: 'Confirmar contraseña'
	},
	device: {
		page_title: 'Nuevo dispositivo',
		tabs: ['Manual', 'búsqueda de red'],
		card_btn_more: 'Más',
		card_btn_more_edit: 'Editar',
		card_btn_more_sleep: 'Suspender',
		card_btn_more_reboot: 'Reiniciar',
		card_tooltip_wake_cron: 'Wake cron',
		card_tooltip_shutdown_cron: 'Shutdown cron',
		card_tooltip_wake_password: 'Wake password',
		card_tooltip_last_status_change: 'Último cambio de estado',
		card_password: 'Contraseña',
		card_nic_tooltip_pending: 'Pendiente',
		card_nic_tooltip_shutdown: 'Apagar',
		card_nic_tooltip_shutdown_no_cmd: 'El comando de apagado no está definido',
		card_nic_tooltip_shutdown_no_permission: 'No tienes permiso para apagar este dispositivo',
		card_nic_tooltip_power: 'Encender',
		card_nic_tooltip_power_no_permission: 'No tienes permiso para encender este dispositivo',
		modal_confirm_wake_title: 'Activar {device}?',
		modal_confirm_wake_desc: 'Confirme para activar {device}.',
		modal_confirm_shutdown_title: 'Apagar {device}?',
		modal_confirm_shutdown_desc: 'Por favor confirme para apagar {device}.',
		general: 'General',
		general_name: 'Nombre',
		general_name_placeholder: 'Nombre del dispositivo',
		general_ip: 'IP',
		general_mac: 'Mac',
		general_netmask: 'Máscara de red',
		general_description: 'Descripción',
		general_description_placeholder: 'Descripción del dispositivo',
		general_required_field: 'Campo obligatorio',
		ports: 'Puertos',
		ports_desc: 'UpSnap puede comprobar si ciertos puertos están abiertos.',
		ports_add_new: 'Añadir nuevo puerto',
		ports_name: 'Nombre',
		ports_number: 'Número',
		link: 'Link',
		link_desc:
			'Permite que el nombre de su dispositivo sea un enlace. Perfecto para dashboard, por ejemplo.',
		link_open: 'Abrir enlace automáticamente',
		link_open_no: 'No',
		link_open_same_tab: 'Misma pestaña',
		link_open_new_tab: 'Nueva pestaña',
		ping: 'Ping',
		ping_desc:
			'Puede utilizar un comando de shell personalizado para ver si el dispositivo está conectado. El comando debe devolver un código de salida de <span class="badge">0</span> para indicar que el dispositivo está encendido; cualquier otro código de salida marcará el dispositivo como apagado.',
		ping_cmd: 'Comando ping personalizado',
		wake: 'Encender',
		wake_desc: 'Podrá encender este dispositivo utilizando un scheduled cron job.',
		wake_cmd: 'Comando de encendido personalizado',
		wake_cron: 'Encender cron',
		wake_cron_enable: 'Activar wake cron',
		sol: 'Sleep-On-LAN',
		sol_desc1:
			'Puedes poner las computadoras en modo de suspensión usando <a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a > herramienta. Sleep-On-LAN (SOL) es una herramienta/daemon externo que opera en las PC que desea poner en suspensión y proporciona un punto final REST. Para obtener instrucciones sobre cómo configurar Sleep-On-LAN, consulte <a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank" >Uso</a> sección.',
		sol_desc2:
			'SOL está configurado para enviar solicitudes a través de HTTP en lugar de UDP para permitir la autorización y hacer que las solicitudes sean más confiables.',
		sol_desc3:
			'Por lo tanto, asegúrese de incluir <span class="badge">HTTP:&lt;YOURPORT&gt;</span> en la sección <span class="badge">Oyentes</span> de <a href="https ://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">configuración SOL</a>.',
		sol_enable: 'Activar Sleep-On-LAN',
		sol_port: 'Puerto SOL',
		sol_authorization: 'Autorización',
		sol_user: 'Usuario SOL',
		sol_password: 'Contraseña SOL',
		shutdown: 'Apagar',
		shutdown_desc:
			'Este <strong>comando de shell</strong> se ejecutará dentro de su contenedor (si usa Docker) o en su host (si usa el binario). Para verificar que funciona, primero puede ejecutar el comando dentro del contenedor o en el shell de su host. Los comandos comunes son <span class="badge">net rpc</span> para Windows, <span class="badge">sshpass</span> para Linux o <span class="badge">curl</span> en general para realizar solicitudes web.',
		shutdown_examples: 'Ejemplos:',
		shutdown_examples_windows: 'Apagar el dispositivo Windows remoto:',
		shutdown_examples_linux: 'Apagar el dispositivo Linux remoto:',
		shutdown_cmd: 'Comando para Apagar',
		shutdown_cron_desc:
			'Al igual que configurar un cron para encender el dispositivo, también puede programar un cron job para apagar este dispositivo.',
		shutdown_cron: 'Apagar cron',
		shutdown_cron_enable: 'Activar apagado de cron',
		password: 'Contraseña',
		password_desc:
			'Algunos adaptadores de red tienen la opción de definir una contraseña para magic pockets, también conocidos como <span class="badge">SecureON</span>. la contraseña sólo podrá contener 0, 4 o 6 caracteres.',
		groups: 'Grupos',
		groups_desc: 'Puede agregar dispositivos a un grupo para ordenarlos por grupo en el dashboard.',
		groups_placeholder: "e.g. 'Basement' o 'Office'",
		network_scan_range_saved: 'Rango de escaneo guardado',
		network_scan_desc:
			'Escanee automáticamente su red en busca de dispositivos. Para que esto funcione, necesita ejecutar UpSnap como root/admin y tener nmap instalado y disponible en su $PATH (para los usuarios de Docker, ese ya es el caso y no necesitan hacer nada). El escaneo puede tardar algunos segundos.',
		network_scan_ip_range: 'Rango IP',
		network_scan_no_range: 'Sin rango de escaneo',
		network_scan_unsaved_changes: 'Cambios sin guardar',
		network_scan_running: 'Escaneo en curso',
		network_scan: 'Escaneo',
		network_scan_ip: 'IP:',
		network_scan_mac: 'Mac:',
		network_scan_mac_vendor: 'Proveedor Mac:',
		network_scan_netmask: 'Máscara de red:',
		network_scan_add_all: 'Añadir todos los dispositivos',
		network_scan_replace_netmask: 'Reemplazar máscara de red para todos los dispositivos?',
		network_scan_new_netmask: 'Nueva mascara de red',
		network_scan_include_unknown: 'Incluir dispositivos donde este el nombre "Unknown"',
		require_confirmation: 'Requiere confirmación'
	},
	login: {
		welcome: 'Bienvenido',
		email_label: 'Email o Nombre de usuario:',
		password_label: 'Contraseña:',
		btn_more: 'Más',
		menu_title_auth_providers: 'Otros proveedores de autenticación',
		btn_login: 'Entrar'
	},
	settings: {
		page_title: 'Ajustes',
		ping_interval_title: 'Intervalo ping',
		ping_interval_desc1:
			'Establece el intervalo en el que se realiza el ping. Déjelo en blanco para usar el valor predeterminado de <span class="badge">@every 3s</span>.',
		ping_interval_desc2:
			'Puedes ver la sintaxis correcta para cron en <a class="link" href="https://en.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> o en <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">documentación cron</a>.',
		lazy_ping_title: 'Lazy ping',
		lazy_ping_desc:
			'Cuando el ping diferido está activado, UpSnap solo hará ping a los dispositivos si hay un usuario activo visitando el sitio web. Si está desactivado, UpSnap siempre hará ping a los dispositivos.',
		lazy_ping_enable: 'Activar',
		website_title_title: 'Titulo de la página',
		website_title_desc: 'Establece el título del sitio web y en la pestaña del navegador.',
		icon_title: 'Icon',
		icon_desc: 'Establece un favicon personalizado. Los tipos de archivos admitidos son:',
		upsnap_version: 'Version UpSnap'
	},
	users: {
		page_title: 'Usuarios',
		allow_create_devices:
			'Permitir a {username} para crear nuevos dispositivos y editar grupos de dispositivos',
		device_permissions: 'Permisos del dispositivo',
		create_new_device: 'Añadir dispositivo',
		read: 'Leer',
		update: 'Editar',
		delete: 'Eliminar',
		power: 'Energía',
		toggle: 'Alternar',
		confirm_delete_title: 'Confirmar',
		confirm_delete_desc: 'Estas seguro que quieres borrarlo {username}?',
		create_new_user: 'Crear nuevo usuario',
		username: 'Usuario',
		password: 'Contraseña',
		password_confirm: 'Confirmar contraseña',
		required_field: 'Campo obligatorio'
	},
	buttons: {
		save: 'Guardar',
		delete: 'Eliminar',
		change: 'Alterar',
		reset: 'Reiniciar',
		cancel: 'Cancelar',
		add: 'Añadir',
		confirm: 'Confirmar'
	},
	welcome: {
		step1_page_title: 'Bienvenido a UpSnap 🥳',
		step1_setup_desc: 'Por favor complete los siguientes pasos para terminar la configuración.',
		step1_setup_btn_next: 'Siguiente',
		step2_page_title: 'Crear cuenta de administrador',
		step2_label_email: 'Email:',
		step2_label_password: 'Contraseña:',
		step2_label_min_chars: 'min. 10 caracteres',
		step2_label_password_confirm: 'Confirmar contraseña:',
		step2_btn_create: 'Crear',
		step3_page_title: 'Ya está hecho! 🎉',
		step3_page_desc: 'Añada algún dispositivo a su dashboard.',
		step3_btn_done: 'Vamos!',
		not_expected_title: 'No te esperaba por aquí! 🧐',
		not_expected_desc: 'Ya has terminado con la configuración! Nada que hacer!.',
		not_expected_back: 'Llévame de vuelta',
		progress_step1: 'Bienvenido',
		progress_step2: 'Crear cuenta',
		progress_step3: 'Terminado'
	},
	toasts: {
		admin_saved: 'Administrador guardado',
		user_saved: 'Usuario actualizado',
		user_created: 'Usuario {username} creado',
		user_deleted: 'Usuario {username} eliminado',
		settings_saved: 'Configuraciones guardadas',
		password_changed: 'Contraseña cambiada. Por favor acceda otra vez',
		passwords_missmatch: 'Las contraseñas no coinciden',
		permissions_created: 'Permisos creados para {username}',
		permissions_deleted: 'Permisos para {username} eliminados',
		permissions_updated: 'Permisos para {username} actualizados',
		permissions_updated_personal: 'Tus permisos han sido actualizados',
		no_permission: 'Tu no tienes permiso para visitar {url}',
		device_created: 'Creado {device}',
		devices_created_multiple: 'Añadidos {count|int} dispositivos',
		device_updated: '{device} actualizado',
		device_deleted: '{device} apagado',
		group_created: 'Grupo {group} creado',
		group_deleted: 'Grupo {group} eliminado'
	},
	navbar: {
		theme: 'Tema',
		new: 'Nuevo',
		edit_account: 'Editar cuenta',
		logout: 'Salir'
	}
} satisfies Translation;

export default es;
