import axios from 'axios';
import { table_data, table_data_loading } from '$lib/stores/table_data.store';
import { toast } from 'svelte-sonner';

const API_HOST = import.meta.env.VITE_API_HOST || 'localhost';
const API_PORT = import.meta.env.VITE_API_PORT || '3000';
const API_BASE_URL = `http://${API_HOST}:${API_PORT}`;

export const get_addictions = async (limit: number = 0) => {
	table_data_loading.set(true);
	table_data.set([]);
	try {
		const response = await axios.get(`${API_BASE_URL}/addictions?limit=${limit}`);
		table_data.set(response.data);
		toast.success('Fetched successfully');
	} catch (error: unknown) {
		const error_msg =
			axios.isAxiosError(error) && error.response?.data?.error
				? error.response.data.error
				: 'Unknown error occurred';
		console.error('Axios GET error:', error_msg);
		toast.error('Couldnt fetched data', { description: error_msg });
		throw error;
	} finally {
		table_data_loading.set(false);
	}
};

export const get_addiction = async (params: Record<string, any>) => {
	table_data_loading.set(true);
	table_data.set([]);
	try {
		const response = await axios.get(`${API_BASE_URL}/addiction`, { params });
		table_data.set(response.data);
		toast.success('Fetched successfully');
	} catch (error: unknown) {
		const error_msg =
			axios.isAxiosError(error) && error.response?.data?.error
				? error.response.data.error
				: 'Unknown error occurred';
		console.error('Axios GET error:', error_msg);
		toast.error('Couldnt fetched data', { description: error_msg });
		throw error;
	} finally {
		table_data_loading.set(false);
	}
};

export const post_addiction = async (data: Record<string, any>) => {
	table_data_loading.set(true);
	table_data.set([]);
	try {
		const response = await axios.post(`${API_BASE_URL}/addiction`, { ...data });
		table_data.set(response.data);
		toast.success('Fetched successfully');
	} catch (error: unknown) {
		const error_msg =
			axios.isAxiosError(error) && error.response?.data?.error
				? error.response.data.error
				: 'Unknown error occurred';
		console.error('Axios POST error:', error_msg);
		toast.error('Couldnt fetched data', { description: error_msg });
		throw error;
	} finally {
		table_data_loading.set(false);
	}
};

export const put_addiction = async (data: Record<string, any>) => {
	table_data_loading.set(true);
	table_data.set([]);
	try {
		const response = await axios.put(`${API_BASE_URL}/addiction`, { ...data });
		table_data.set(response.data);
		toast.success('Fetched successfully');
	} catch (error: unknown) {
		const error_msg =
			axios.isAxiosError(error) && error.response?.data?.error
				? error.response.data.error
				: 'Unknown error occurred';
		console.error('Axios POST error:', error_msg);
		toast.error('Couldnt fetched data', { description: error_msg });
		throw error;
	} finally {
		table_data_loading.set(false);
	}
};

export const get_stats = async () => {
	table_data_loading.set(true);
	table_data.set([]);
	try {
		const response = await axios.get(`${API_BASE_URL}/stats`);
		const array = [response.data];
		table_data.set(array);
		toast.success('Fetched successfully');
	} catch (error: unknown) {
		const error_msg =
			axios.isAxiosError(error) && error.response?.data?.error
				? error.response.data.error
				: 'Unknown error occurred';
		console.error('Axios GET error:', error_msg);
		toast.error('Couldnt fetched data', { description: error_msg });
		throw error;
	} finally {
		table_data_loading.set(false);
	}
};
