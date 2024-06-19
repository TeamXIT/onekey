// src/containers/DynamicFormContainer.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import { getPropertyType } from '../../reducers/Product/productSlice';
import DynamicForm from '../Landing/DynamicForm';

const DynamicFormContainer = ({ route }) => {
    const dispatch = useDispatch();
    const { formData, isBusy, error } = useSelector(state => state.product);
    const { propertyType } = route.params;

    useEffect(() => {
        dispatch(getPropertyType(propertyType));
    }, [dispatch, propertyType]);

    if (isBusy) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>{error}</Text>;

    return <DynamicForm formData={formData} />;
};

export default DynamicFormContainer;
